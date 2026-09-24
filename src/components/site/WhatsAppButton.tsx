import { whatsappLink } from "@/lib/siteConfig";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.66 4.526 1.804 6.386L4 29l7.79-1.77A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.983-1.363l-.357-.212-4.62 1.05 1.032-4.5-.233-.37A9.77 9.77 0 0 1 5.182 15c0-5.968 4.854-10.818 10.822-10.818S26.818 9.032 26.818 15 21.972 24.818 16.004 24.818Zm5.34-7.78c-.293-.147-1.734-.856-2.003-.954-.269-.098-.465-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.342.22-.635.073-.293-.147-1.237-.456-2.357-1.454-.871-.777-1.46-1.737-1.63-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.514.147-.171.196-.293.294-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.59-.904-2.178-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.445 0 1.442 1.05 2.836 1.196 3.032.147.196 2.066 3.155 5.007 4.424.699.302 1.244.482 1.669.617.701.223 1.339.191 1.844.116.563-.084 1.734-.709 1.979-1.393.244-.685.244-1.271.171-1.393-.073-.122-.269-.196-.562-.343Z" />
    </svg>
  );
}

export function WhatsAppButton({
  className,
  label,
  message,
}: {
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-sm transition hover:brightness-95"
      }
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label ?? "Falar no WhatsApp"}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:brightness-95 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
