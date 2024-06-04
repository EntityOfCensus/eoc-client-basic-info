import { atom } from 'recoil';

export const surveyData1Atom = atom({
  key: 'surveyData1',
  default: {
    question: "What is your favorite color?",
    possibleAnswers: ["Red", "Blue", "Green", "Yellow"]
  }
});

export const surveyData2Atom = atom({
  key: 'surveyData2',
  default: {
    question: "How often do you exercise?",
    possibleAnswers: ["Daily", "Weekly", "Monthly", "Rarely"]
  }
});

export const newTargetGroupAtom = atom({
  key: 'newTargetGroup',
  default: {
    dob: new Date(),
    gender: 'both',
    country: '',
    surveyData: [surveyData1Atom, surveyData2Atom]
  }
});
