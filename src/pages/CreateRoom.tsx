import type { FormEvent } from 'react';
import { useId, useState } from 'react';
import { RoomQRCode } from '../components/RoomQRCode';
import { createRoomQrCodeData, generateJoinCode } from '../utils';

interface CreateRoomProps {
  onBack: () => void;
}

interface CreatedRoom {
  roomId: string;
  roomName: string;
  hostDisplayName: string;
  joinCode: string;
  qrCodeData: string;
  createdAt: string;
}

function generateRoomId() {
  const browserCrypto = globalThis.crypto;

  if (browserCrypto && 'randomUUID' in browserCrypto) {
    return browserCrypto.randomUUID();
  }

  return `room-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

export function CreateRoom({ onBack }: CreateRoomProps) {
  const roomNameId = useId();
  const hostDisplayNameId = useId();
  const formErrorId = useId();
  const [roomName, setRoomName] = useState('');
  const [hostDisplayName, setHostDisplayName] = useState('');
  const [formError, setFormError] = useState('');
  const [createdRoom, setCreatedRoom] = useState<CreatedRoom | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedRoomName = roomName.trim();
    const trimmedHostDisplayName = hostDisplayName.trim();

    if (!trimmedRoomName || !trimmedHostDisplayName) {
      setFormError('Enter a room name and host display name.');
      return;
    }

    setFormError('');

    const roomId = generateRoomId();
    const joinCode = generateJoinCode();

    setCreatedRoom({
      roomId,
      roomName: trimmedRoomName,
      hostDisplayName: trimmedHostDisplayName,
      joinCode,
      qrCodeData: createRoomQrCodeData({ roomId, joinCode }),
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-8 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
        >
          Back
        </button>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <section
            aria-labelledby="create-room-title"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-slate-50">
                <img
                  src="/icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-600">
                  ZongoLink-V1
                </p>
                <h1
                  id="create-room-title"
                  className="text-3xl font-bold leading-tight text-slate-950"
                >
                  Create Room
                </h1>
              </div>
            </div>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
              aria-describedby={formError ? formErrorId : undefined}
            >
              <div>
                <label
                  htmlFor={roomNameId}
                  className="block text-sm font-semibold text-slate-800"
                >
                  Room Name
                </label>
                <input
                  id={roomNameId}
                  name="roomName"
                  type="text"
                  value={roomName}
                  onChange={(event) => setRoomName(event.target.value)}
                  required
                  maxLength={80}
                  autoComplete="off"
                  aria-invalid={formError && !roomName.trim() ? 'true' : 'false'}
                  className="mt-2 block min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600"
                  placeholder="Example room"
                />
              </div>

              <div>
                <label
                  htmlFor={hostDisplayNameId}
                  className="block text-sm font-semibold text-slate-800"
                >
                  Host Display Name
                </label>
                <input
                  id={hostDisplayNameId}
                  name="hostDisplayName"
                  type="text"
                  value={hostDisplayName}
                  onChange={(event) => setHostDisplayName(event.target.value)}
                  required
                  maxLength={60}
                  autoComplete="name"
                  aria-invalid={
                    formError && !hostDisplayName.trim() ? 'true' : 'false'
                  }
                  className="mt-2 block min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600"
                  placeholder="Your name"
                />
              </div>

              {formError ? (
                <p
                  id={formErrorId}
                  role="alert"
                  className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900"
                >
                  {formError}
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Create Room
              </button>
            </form>
          </section>

          <section
            aria-labelledby="created-room-title"
            aria-live="polite"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2
              id="created-room-title"
              className="text-xl font-bold leading-7 text-slate-950"
            >
              Room Details
            </h2>

            {createdRoom ? (
              <>
                <dl className="mt-6 grid gap-4">
                  <div className="border-t border-slate-200 pt-4">
                    <dt className="text-sm font-semibold text-slate-500">
                      Room Name
                    </dt>
                    <dd className="mt-1 break-words text-lg font-bold text-slate-950">
                      {createdRoom.roomName}
                    </dd>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <dt className="text-sm font-semibold text-brand-900">
                      Join Code
                    </dt>
                    <dd className="mt-2 break-all font-mono text-3xl font-bold tracking-wide text-brand-900 sm:text-4xl">
                      {createdRoom.joinCode}
                    </dd>
                  </div>
                </dl>
                <RoomQRCode
                  qrCodeData={createdRoom.qrCodeData}
                  joinCode={createdRoom.joinCode}
                  roomName={createdRoom.roomName}
                />
              </>
            ) : (
              <p className="mt-6 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">
                Room details pending.
              </p>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
