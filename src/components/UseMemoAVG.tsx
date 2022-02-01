import React, { useState, useMemo, useCallback } from 'react';
/**
 *
 * useMemo 특히 input onChange에 의해 변경을 게속 감지하게되어
 * 최종 연산 결과만 확인할 경우에는 해당 함수가 리렌더링되서 성능에 영향을 주게된다.
 * useEffect처럼 변경을 디텍팅할 변수를 배열에 넣으면
 * 해당 변수가 업데이트 됐을때 useMemo body에 작성된 코드가 실행된다.
 *
 */

const getAverage = (numbers: number[]) => {
  console.log('리렌더링 평균값 계산중..');

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const UseMemoAVG = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState('');

  /**
   * NOTE:useCallback은 useMemo과 유사한 원리로 값이 아닌 생성해두었던 함수를 기억해 리렌더링시 함수가 재생성되는 것을 방지
   * 컴포넌트가 처음 생성될때만 함수생성하고자 한다면 빈배열
   */
  const onChange = useCallback((e: { target: { value: string } }) => {
    setNumber(e.target.value);
  }, []);

  /**
   * NOTE:useCallback사용시
   * 해당 함수내에서 상태값에 의존해야하는경우 반드시
   * 두번째 파라미터 배열에 포함해줘야한다
   *
   */
  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number, 10)));
    setNumber('');
  }, [number, list]);

  //list변수가 변화가 됐을때 useMemo callback으로 전달한 getAverage 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>useMemo 활용 평균값 계산</h1>
      <input type='text' value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* <div>평균값:{getAverage(list)}</div> */}
      <div>평균값:{avg}</div>
    </div>
  );
};

export default UseMemoAVG;
