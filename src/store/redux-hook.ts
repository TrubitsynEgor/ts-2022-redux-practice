import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

//todo В этом файле мы создаем пользовательские хуки, уже с готовой типизацией
//todo Что облегчает нам их дальнейшее использование

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector