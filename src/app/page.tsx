import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className='text2'>
      <div className='text1'>
        <Slider />
      </div>
      <Featured />
      <Offer />
    </main>
  )
}