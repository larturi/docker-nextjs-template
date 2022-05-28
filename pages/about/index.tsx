import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>About</h1>
      <h4 className={'subtitle'}>Esta es la página About</h4>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}