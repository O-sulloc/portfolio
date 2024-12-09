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
              // react-i18next의 t() 함수는 기본적으로 string을 반환하므로, returnObjects: true 옵션을 사용하여, 객체 또는 배열을 반환하도록 설정
              // 문제는 TypeScript가 이 반환값이 무엇일지 명확히 타입 추론할 수 없기 때문에, as string[]로 타입을 강제로 지정해줘야 함
            />
          ))}
        </div>

      </section>
    </>
  )
}

export default Stack;