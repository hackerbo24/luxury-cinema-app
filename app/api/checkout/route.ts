// DELETE the import PaymongoClient line entirely
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Now, just use the fetch method instead
  const { amount, description } = await req.json();

  const response = await fetch('https://api.paymongo.com/v2/checkout_sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // This is how we authenticate now
      'Authorization': `Basic ${Buffer.from(process.env.PAYMONGO_SECRET_KEY!).toString('base64')}`,
    },
    body: JSON.stringify({
      data: {
        attributes: {
          send_email_receipt: false,
          show_description: true,
          show_line_items: true,
          cancel_url: 'https://yourwebsite.com/concessions',
          description: description,
          line_items: [
            {
              currency: 'PHP',
              amount: amount * 100, // PayMongo uses centavos
              name: 'Cinema Ticket & Concessions',
              quantity: 1,
            },
          ],
          payment_method_types: ['gcash', 'paymaya', 'card'],
          success_url: 'https://yourwebsite.com/success',
        },
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: 500 });
  }

  return NextResponse.json({ url: data.data.attributes.checkout_url });
}