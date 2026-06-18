import type { JoinCode, RoomId } from '../types';

export interface MockRoomSummary {
  roomId: RoomId;
  roomName: string;
  joinCode: JoinCode;
}

const MOCK_ROOMS: MockRoomSummary[] = [
  {
    roomId: 'mock-room-planning-sync',
    roomName: 'Planning Sync',
    joinCode: 'Q8P4ZT',
  },
  {
    roomId: 'mock-room-team-standup',
    roomName: 'Team Standup',
    joinCode: 'A7D9K2',
  },
];

export function findMockRoomByJoinCode(joinCode: JoinCode) {
  const normalizedJoinCode = joinCode.trim().toUpperCase();

  return (
    MOCK_ROOMS.find((room) => room.joinCode === normalizedJoinCode) ?? null
  );
}
