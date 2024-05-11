'use server';

import { API_HOST } from '@/app/config';

export async function sendEmail(_prevState: string | undefined | null, formData: FormData) {
  try {
    const res = await fetch(`${API_HOST}/api/email`, {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    });

    const data = await res.json();

    if (res.status === 200 && data.status) {
      return null;
    }
  } catch (error) {
    console.error(sendEmail.name, JSON.stringify(error, null, 2));

    if (error instanceof Error) {
      return error.message;
    }

    return 'Something went wrong.';
  }
}
