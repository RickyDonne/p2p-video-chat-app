import { Server as IOServer, Socket as IOSocket } from "socket.io";
import { ClientEvents, ServerEvents } from "../../../lib/src/types/websockets";
export declare type Server = IOServer<ClientEvents, ServerEvents>;
export declare type Socket = IOSocket<ClientEvents, ServerEvents>;
