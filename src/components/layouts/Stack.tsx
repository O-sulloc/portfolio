import React from 'react';
import StackCard from '../common/StackCard';
import { faJs, faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

type StackKey = 'backend' | 'front' | 'devOps';

const iconMap: Record<StackKey, any> = { backend: faJava, front: faJs, devOps: faAws };
const stackKeys: StackKey[] = ['backend', 'front', 'devOps'];

const Stack = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="stack-section" id='stack-section'>
        <h1>Stack</h1>
        <div className='stack-container'>
          {stackKeys.map((key) => (
            <StackCard
              key={key}
              iconName={iconMap[key]}
              title={t(`stack:${key}:title`)}
              desc={t(`stack:${key}:desc`)}
              stackList={t(`stack:${key}:stackList`, { returnObjects: true}) as string[]}
            />
          ))}
        </div>

      </section>
    </>
  )
}

export default Stack;