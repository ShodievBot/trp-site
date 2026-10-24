"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  openLabel: string;
  closeLabel: string;
};

export default function ImageLightbox({ src, alt, openLabel, closeLabel }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="lightboxTrigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={openLabel}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 560px" />
      </button>

      <dialog
        ref={dialogRef}
        className="lightboxDialog"
        onClick={() => dialogRef.current?.close()}
      >
        <button type="button" className="lightboxClose" aria-label={closeLabel}>
          ×
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element -- full-size original, natural dimensions */}
        <img src={src} alt={alt} />
      </dialog>
    </>
  );
}
