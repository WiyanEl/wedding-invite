import Wrapper from '@/app/components/josiah-dan-stevie/Wrapper'

export default async function Page({ params, }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  
  return <Wrapper params={name} />
}