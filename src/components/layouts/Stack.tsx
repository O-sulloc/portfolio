import { useMemo } from 'react';
import StackCard from '../common/StackCard';
import { faJs, faAws, faJava } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import enStack from '../../locales/en/stack.json';
import koStack from '../../locales/ko/stack.json';

const iconMap: Record<string, IconDefinition> = { backend: faJava, front: faJs, devOps: faAws };

const Stack = () => {
  const { t, i18n } = useTranslation();

  // 현재 언어에 맞는 stack 데이터를 가져옵니다
  const stackData = useMemo(() => {
    return i18n.language === 'ko-KR' ? koStack : enStack;
  }, [i18n.language]);

  return (
    <>
      <section className="stack-section" id='stack-section'>
        <h1>{t("navbar:stack")}</h1>
        <div className='stack-container'>
          {stackData.map((item) => (
            <StackCard
              key={item.key}
              iconName={iconMap[item.key]}
              title={item.title}
              desc={item.desc}
              stackList={item.stackList}
            />
          ))}
        </div>

      </section>
    </>
  )
}

export default Stack;