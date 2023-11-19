import { atom } from 'recoil';

export const intPlanAtom = atom({
  key: 'intPlanAtom',
  default: {
    firstStart: '',
    firstEnd: '',
    firstAnnounce: '',
    secondStart: '',
    secondEndDate: '',
    secondAnnounce: '',
  },
});
