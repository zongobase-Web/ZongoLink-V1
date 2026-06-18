import { useId } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface RoomQRCodeProps {
  qrCodeData: string;
  joinCode: string;
  roomName: string;
}

export function RoomQRCode({
  qrCodeData,
  joinCode,
  roomName,
}: RoomQRCodeProps) {
  const titleId = useId();

  return (
    <figure
      aria-labelledby={titleId}
      className="mt-6 border-t border-slate-200 pt-4"
    >
      <figcaption>
        <p
          id={titleId}
          className="text-sm font-semibold text-slate-500"
        >
          QR Code
        </p>
      </figcaption>
      <div className="mt-3 flex flex-col items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
        <QRCodeSVG
          value={qrCodeData}
          title={`QR code for ${roomName}`}
          size={176}
          level="M"
          marginSize={4}
          className="h-auto w-full max-w-44"
        />
        <p className="text-center text-sm text-slate-600">
          Scan to join with code{' '}
          <span className="font-mono font-bold text-slate-950">{joinCode}</span>
          .
        </p>
      </div>
    </figure>
  );
}
