import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Ticket Route Hit!!");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { message: "Error creating ticket", error: error.message },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  console.log("All Tickets route!!");
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error getting tickets:", error);
    return NextResponse.json(
      { message: "Error getting tickets", error: error.message },
      { status: 500 }
    );
  }
}
