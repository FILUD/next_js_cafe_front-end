
export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  

  const pathnameIsMissingLocale = ['en', 'th', 'la'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = request.cookies.get('i18next')?.value || 'en';
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}