import { WMINameCard } from '../components/WMICard/WMINameCard'
import NvidiaLogo from '../assets/nvidia-logo.svg'
import { WMICard } from '../components/WMICard/WMICard'
import { Button } from '../components/Buttons'
import { Modal } from '../components/Modal'

export const ComponentExamples = () => {
  console.log('ComponentEamples rendered')
  return (
    <div>
      {/* <WMINameCard
      name='MyConfig-Marvel-Phase3-Tony_stark'
      description='DescriptionAliquam interdum nisi id metus dictum mollis quis tempus turpis. Aliquam tincidunt tempor dolor. Fusce mattis lobortis augue ut facilisis.'
      icon={NvidiaLogo}
    /> */}
      <WMICard
        name='MyConfig-Marvel-Phase3-Tony_stark'
        description='DescriptionAliquam interdum nisi id metus dictum mollis quis tempus turpis. Aliquam tincidunt tempor dolor. Fusce mattis lobortis augue ut facilisis.'
        icon={NvidiaLogo}
        instanceName='G5 Instance'
        instanceVariant='16x Large'
        cpuCores={48}
        memory={16}
        storage={200}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button>Select</Button>
        </div>
      </WMICard>

      <Modal
        title='APPLICATIONS'
        containerStyle={{
          width: '636px',
        }}
      >
        <div>Modal body</div>
      </Modal>
    </div>
  )
}
