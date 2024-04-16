import Header from "./components/ui/header"
import Footer from "./components/ui/footer"
import HomePage from "./components/ui/homepage"

import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

interface PageParams {
  params: {
    lang: Locale
  }
}

export default async function Page({
  params: { lang }
}: PageParams) {

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header />
      <HomePage dictionary={dictionary.home} />
      <Footer />
    </>
  );
}
