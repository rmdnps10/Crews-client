import { atom } from 'recoil';

export const intPlanAtom = atom({
  key: 'intPlanAtom',
  default: {
    //  first(1차,2차)s(시작,마감,발표)y(년,월,일,시,분) : 총 30개
    firstsy: '',
    firstsm: '',
    firstsd: '',
    firstsh: '',
    firstsmn: '',

    firstey: '',
    firstem: '',
    firsted: '',
    firsteh: '',
    firstemn: '',

    firstay: '',
    firstam: '',
    firstad: '',
    firstah: '',
    firstamn: '',

    // 2차 서류 전형 일정
    secondsy: '',
    secondsm: '',
    secondsd: '',
    secondsh: '',
    secondsmn: '',

    secondey: '',
    secondem: '',
    seconded: '',
    secondeh: '',
    secondemn: '',

    seconday: '',
    secondam: '',
    secondad: '',
    secondah: '',
    secondamn: '',
  },
});
