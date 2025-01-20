/**
 * Enum or enumeration : kind of special class
 * 
 * multiple status of a ticket
 * Ticket status ["initialized", "cancelled", "resolved", "pending"]
 *  
 */

// - Internally mapped with bunch of integers
// enum TicketStatus {
//     INITIALIZED,
//     CANCELLED,
//     PENDING,
//     CLOSED
// }

enum TicketStatus {
    INITIALIZED = "initialized",
    CANCELLED = "cancelled",
    PENDING = "pending",
    CLOSED = "closed"
};

console.log(TicketStatus.INITIALIZED);
console.log(TicketStatus.CANCELLED);
console.log(TicketStatus.PENDING);
console.log(TicketStatus.CLOSED);

const Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALIZED
};
console.log(Ticket);

if(Ticket.status === TicketStatus.INITIALIZED) {

}


enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400
};

const response = {
    url: "www.something.com",
    type: "GET",
    data: "some string",
    status: StatusCode.Success
};

console.log(response);

if(response.status === StatusCode.Success) {

}