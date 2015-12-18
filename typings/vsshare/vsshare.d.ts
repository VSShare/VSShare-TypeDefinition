// Type definitions for VSShare Protocol
// Project: http://github.com/VSShare/
// Definitions by: Yuki Igarashi <https://github.com/bonprosoft/>

/*
	Common Types
*/

interface UpdateContentData {
	data: Line[],
	type: UpdateType,
	pos: number,
	len: number,
	order: number
}

interface Line {
	text: string;
	modified: boolean;
}

declare const enum UpdateType {
	Insert = 0,
	Delete = 1,
	Replace = 2,
	Append = 3,
	RemoveMarker = 4,
	ResetAll = 5
}

interface CursorPosition {
	line: number;
	pos: number;
}

declare const enum CursorType {
	Point = 0,
	Select = 1
}

declare const enum BroadcastEventType {
	StartBroadcast = 0,
	StopBroadcast = 1
}

interface SessionRequestBase {
	id: string;
}

/* 
	For Authorization
*/

interface AuthorizeBroadcasterRequest {
	user_name: string;
	access_token: string;
	room_name: string;
	room_token: string;
}

interface AuthorizeBroadcasterResponse {
	success: boolean;
}

interface AuthorizeListenerRequest {
	token: string;	
}

interface AuthorizeListenerResponse {
	success: boolean;
}

/* 
	For Broadcaster
*/

interface AppendSessionRequest {
	filename: string;
	type: string;
}

interface AppendSessionResponse {
	id: string;
	success: boolean;
}

interface RemoveSessionRequest extends SessionRequestBase {
}

interface UpdateSessionContentRequest extends SessionRequestBase {
	data: UpdateContentData[]
}

interface UpdateSessionCursorRequest extends SessionRequestBase {
	anchor: CursorPosition,
	active: CursorPosition,
	type: CursorType
}

interface UpdateSessionInfoRequest extends SessionRequestBase {
	filename: string;
	type: string;
}

/* 
	For Listener
*/

interface GetContentRequest extends SessionRequestBase {
}

interface GetCursorRequest extends SessionRequestBase {
}

interface GetSessionRequest extends SessionRequestBase {
}

/* 
	For Listener Notification
*/

interface AppendSessionNotification {
	id: string;
	filename: string;
	type: string;
	owner_name: string;	
}

interface BroadcastEventNotification {
	event: BroadcastEventType;	
}

interface UpdateBroadcastStatusNotification {
	view: number;
	visitor: number;	
}
