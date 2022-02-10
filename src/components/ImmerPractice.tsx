import produce, { Draft } from 'immer';
import React, { useCallback, useRef, useState } from 'react';

const ImmerPractice = () => {
  const nextId = useRef(1);

  // 이미 다양한 타입의 프로퍼티를 가진 객체를 가진 state는 불변성을 지키며 상태변경하기가 어렵다.

  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [] as any, uselessValue: null });

  /**
   * 불변성을 신경쓰지 않는 것처럼 코드를 작성하되 불변성 관리를 해주는 라이브러리
   * produce 두가지 파라미터를 받는다.
   * 첫번째 기존 상태값, 두번째 바꾸고 싶은 값
   *
   */
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      // 기존 코드
      //   setForm({
      //     ...form,
      //     [name]: [value],
      //   });

      // immer 적용
      setForm(
        produce(form, (draft: Draft<any>) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새항목 등록
      // 기존코드
      //   setData({
      //     ...data,
      //     array: data.array.concat(info),
      //   });

      // immer 적용
      //   setData(
      //     produce(data, (draft: Draft<any>) => {
      //       draft.array.push(info);
      //     })
      //   );

      // state 변경은 함수형 업데이트
      setData(
        produce((draft: Draft<any>) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목 삭제
  const onRemove = useCallback((id) => {
    // 기존코드
    // 굳이 코드가 길어지는 경우라면 immer를 사용하지 않아도 될것같다.
    //   setData({
    //     ...data,
    //     array: data.array.filter((info: any) => info.id !== id),
    //   });
    //   setData(
    //     produce(data, (draft: Draft<any>) => {
    //       draft.array.splice(
    //         draft.array.findIndex((info: any) => info.id === id)
    //       );
    //     })
    //   );

    // state 변경은 함수형 업데이트
    setData(
      produce((draft: Draft<any>) => {
        draft.array.splice(
          draft.array.findIndex((info: any) => info.id === id)
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          type='text'
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />

        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info: any) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImmerPractice;
