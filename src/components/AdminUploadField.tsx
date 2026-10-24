"use client";

import { useRef, useState } from "react";

type Props = {
  name: string;
  label: string;
  defaultValue?: string;
  folder?: string;
  accept?: string;
  helper?: string;
};

export default function AdminUploadField({
  name,
  label,
  defaultValue = "",
  folder = "uploads",
  accept,
  helper,
}: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(defaultValue);
  const [status, setStatus] = useState<"idle" | "uploading" | "error" | "success">(
    "idle"
  );
  const [error, setError] = useState("");

  async function uploadSelectedFile() {
    const file = fileRef.current?.files?.[0];

    if (!file) {
      setStatus("error");
      setError("Please choose a file first.");
      return;
    }

    setStatus("uploading");
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Upload failed.");
      return;
    }

    setValue(data.url);
    setStatus("success");
  }

  return (
    <div className="adminUploadField">
      <label>
        <span>{label}</span>

        <div className="adminUploadRow">
          <input ref={fileRef} type="file" accept={accept} />
          <button type="button" onClick={uploadSelectedFile} disabled={status === "uploading"}>
            {status === "uploading" ? "Uploading..." : "Upload"}
          </button>
        </div>
      </label>

      <input type="hidden" name={name} value={value} />

      <input
        className="adminUploadUrl"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Uploaded file URL will appear here"
      />

      {helper ? <small>{helper}</small> : null}

      {status === "success" ? (
        <p className="adminUploadSuccess">Uploaded successfully.</p>
      ) : null}

      {status === "error" ? (
        <p className="adminUploadError">{error}</p>
      ) : null}
    </div>
  );
}
