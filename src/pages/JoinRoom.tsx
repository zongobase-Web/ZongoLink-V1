import type { FormEvent } from 'react';
import { useId, useState } from 'react';
import type { MockRoomSummary } from '../utils';
import { findMockRoomByJoinCode } from '../utils';

interface JoinRoomProps {
  onBack: () => void;
}

type JoinRoomStatus =
  | { type: 'idle' }
  | { type: 'error'; message: string }
  | {
      type: 'success';
      displayName: string;
      room: MockRoomSummary;
    };

export function JoinRoom({ onBack }: JoinRoomProps) {
  const displayNameId = useId();
  const joinCodeId = useId();
  const statusId = useId();
  const [displayName, setDisplayName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [status, setStatus] = useState<JoinRoomStatus>({ type: 'idle' });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedDisplayName = displayName.trim();
    const normalizedJoinCode = joinCode.trim().toUpperCase();

    if (!trimmedDisplayName || !normalizedJoinCode) {
      setStatus({
        type: 'error',
        message: 'Enter a display name and join code.',
      });
      return;
    }

    const matchedRoom = findMockRoomByJoinCode(normalizedJoinCode);

    if (!matchedRoom) {
      setStatus({
        type: 'error',
        message: 'No mock room was found for that join code.',
      });
      return;
    }

    setStatus({
      type: 'success',
      displayName: trimmedDisplayName,
      room: matchedRoom,
    });
  }

  const hasDisplayNameError =
    status.type === 'error' && !displayName.trim();
  const hasJoinCodeError = status.type === 'error' && !joinCode.trim();

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
            aria-labelledby="join-room-title"
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
                  id="join-room-title"
                  className="text-3xl font-bold leading-tight text-slate-950"
                >
                  Join Room
                </h1>
              </div>
            </div>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
              aria-describedby={status.type === 'idle' ? undefined : statusId}
            >
              <div>
                <label
                  htmlFor={displayNameId}
                  className="block text-sm font-semibold text-slate-800"
                >
                  Display Name
                </label>
                <input
                  id={displayNameId}
                  name="displayName"
                  type="text"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  required
                  maxLength={60}
                  autoComplete="name"
                  aria-invalid={hasDisplayNameError ? 'true' : 'false'}
                  className="mt-2 block min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor={joinCodeId}
                  className="block text-sm font-semibold text-slate-800"
                >
                  Join Code
                </label>
                <input
                  id={joinCodeId}
                  name="joinCode"
                  type="text"
                  value={joinCode}
                  onChange={(event) =>
                    setJoinCode(event.target.value.toUpperCase())
                  }
                  required
                  maxLength={6}
                  autoCapitalize="characters"
                  autoComplete="off"
                  inputMode="text"
                  aria-invalid={hasJoinCodeError ? 'true' : 'false'}
                  className="mt-2 block min-h-12 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-mono text-base uppercase tracking-wide text-slate-950 shadow-sm outline-none transition placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600"
                  placeholder="XXXXXX"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                Join Room
              </button>
            </form>
          </section>

          <section
            aria-labelledby="join-status-title"
            aria-live="polite"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2
              id="join-status-title"
              className="text-xl font-bold leading-7 text-slate-950"
            >
              Join Status
            </h2>

            {status.type === 'idle' ? (
              <p className="mt-6 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">
                Room lookup pending.
              </p>
            ) : null}

            {status.type === 'error' ? (
              <div
                id={statusId}
                role="alert"
                className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4"
              >
                <p className="text-sm font-semibold text-amber-950">
                  Unable to join room
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  {status.message}
                </p>
              </div>
            ) : null}

            {status.type === 'success' ? (
              <div
                id={statusId}
                className="mt-6 rounded-md border border-brand-100 bg-brand-50 p-4"
              >
                <p className="text-sm font-semibold text-brand-900">
                  Room found
                </p>
                <dl className="mt-4 grid gap-4">
                  <div className="border-t border-brand-100 pt-4">
                    <dt className="text-sm font-semibold text-brand-900">
                      Room Name
                    </dt>
                    <dd className="mt-1 break-words text-lg font-bold text-slate-950">
                      {status.room.roomName}
                    </dd>
                  </div>
                  <div className="border-t border-brand-100 pt-4">
                    <dt className="text-sm font-semibold text-brand-900">
                      Display Name
                    </dt>
                    <dd className="mt-1 break-words text-base font-semibold text-slate-800">
                      {status.displayName}
                    </dd>
                  </div>
                  <div className="border-t border-brand-100 pt-4">
                    <dt className="text-sm font-semibold text-brand-900">
                      Join Code
                    </dt>
                    <dd className="mt-2 font-mono text-2xl font-bold tracking-wide text-brand-900">
                      {status.room.joinCode}
                    </dd>
                  </div>
                </dl>
              </div>
            ) : null}
          </section>
        </div>
      </section>
    </main>
  );
}
