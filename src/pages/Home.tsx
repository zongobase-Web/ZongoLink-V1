const features = [
  'Text Messaging',
  'Voice Notes',
  'Live Voice Communication',
  'Image Sharing',
  'File Sharing',
  'Video File Sharing',
];

export function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section
        aria-labelledby="landing-title"
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-white shadow-sm">
                <img
                  src="/icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-11 w-11"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-600">
                  ZongoLink-V1 Logo Placeholder
                </p>
                <p className="text-sm text-slate-500">Communication platform</p>
              </div>
            </div>

            <h1
              id="landing-title"
              className="mt-8 max-w-3xl text-4xl font-bold leading-tight text-slate-950"
            >
              ZongoLink-V1
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-slate-700">
              Connect. Share. Communicate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Placeholder actions keep the landing page ready without wiring room flows yet. */}
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
                aria-label="Create Room"
              >
                Create Room
              </button>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
                aria-label="Join Room"
              >
                Join Room
              </button>
            </div>
          </div>

          <section
            aria-labelledby="features-title"
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2
              id="features-title"
              className="text-xl font-bold leading-7 text-slate-950"
            >
              Features
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex min-h-20 items-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="mr-3 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400"
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-800">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
