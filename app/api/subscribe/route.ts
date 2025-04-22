import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error("Missing ConvertKit credentials")
      return NextResponse.json({ error: "Newsletter service configuration error" }, { status: 500 })
    }

    // ConvertKit API endpoint for adding a subscriber to a form
    const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
        tags: ["coming_soon_page"],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Error subscribing to newsletter")
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed!" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to subscribe",
      },
      { status: 500 },
    )
  }
}
