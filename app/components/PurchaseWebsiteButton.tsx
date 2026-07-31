const CHECKOUT_URL = "https://buy.stripe.com/dRmdRa0cTbcseCM2gadwc02?prefilled_promo_code=FIRST10FREE3&client_reference_id=la_esperanza";

export default function PurchaseWebsiteButton() {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Buy this website securely through Stripe"
      className="fixed right-4 bottom-5 z-[70] inline-flex min-h-16 items-center justify-center rounded-full border-2 border-[#d8ad5c] bg-[#781f2c] px-7 py-4 text-base font-bold tracking-wide text-[#fff8e9] shadow-[0_12px_32px_rgba(76,18,29,0.32)] transition hover:-translate-y-0.5 hover:bg-[#621824] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ad5c] sm:right-6 sm:bottom-6"
    >
      Buy This Website
    </a>
  );
}
