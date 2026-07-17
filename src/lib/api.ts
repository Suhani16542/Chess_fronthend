export interface DemoBookingPayload {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  age: number;
  city: string;
  chessExperience: string;
  preferredTime: string;
  message: string;
}

export interface DemoBookingResponse {
  success: boolean;
  message: string;
  data?: {
    leadId?: string;
    studentName?: string;
    email?: string;
    status?: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function submitDemoBooking(payload: DemoBookingPayload): Promise<DemoBookingResponse> {
  if (!API_BASE_URL) {
    throw new Error("API URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/demo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as Partial<DemoBookingResponse> & { message?: string; error?: string; errors?: Record<string, string[]> };

  if (!response.ok) {
    if (response.status === 409) {
      throw new Error("A demo request with this email already exists. Our team will contact you soon.");
    }

    const errorMessage =
      data?.message ||
      data?.error ||
      (data?.errors ? Object.values(data.errors).flat().join(" ") : "") ||
      "Unable to submit your request. Please try again.";

    throw new Error(errorMessage);
  }

  return {
    success: true,
    message: data?.message ?? "Your demo class request has been submitted successfully! We will contact you soon.",
    data: data?.data,
  };
}
