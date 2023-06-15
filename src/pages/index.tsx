import { MultiSelect } from '@/components/MultiSelect';
import { Estados } from '@/utils/estadosBr';


export default function Home() {
  return (
    <>
      <MultiSelect options={Estados} />
    </>
  )
}
