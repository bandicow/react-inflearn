import { useEffect, useState } from "react";

// 커스텀 훅's를 생성하는 중

//**delay 주는 함수 */
export const useDebounce = (value, delay) => {
  // 디 바운스 값 세팅
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // delay 만큼 뒤에 값을 보내기
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // 말 그대로 값을 보내는 handler를 클리어 해준다.
    };
  }, [value, delay]); // value나 delay 시간 바뀌면 다시 re call 한다.

  return debounceValue;
};

//return은 useDebounce의 리턴이여서 밖에 해준다.
