import React from 'react';

type IProps = {
  fromParent: string;
  children: React.ReactNode;
};

//NOTE: 파일명은 파스칼케이스 기본 템플릿 emmet rsc

const Home = ({ fromParent, children }: IProps) => {
  return (
    <>
      <div className='props'>{fromParent}</div>

      {/* NOTE: 부모 컴포넌트에서 호출되어 해당 컴포넌트내부에 작성된 노드들을
      동적으로 생성 */}
      <section className='between-component'>{children}</section>
    </>
  );
};

export default Home;
