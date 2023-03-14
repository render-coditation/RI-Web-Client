import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'src/redux/app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>
export const useAppDispatch = () => useDispatch<ThunkAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
