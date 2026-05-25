export const modules = [
  'Introduction to Variation','Direct Variation','Inverse Variation','Joint Variation','Combined Variation','Graph Interpretation','SPM Mastery Practice'
];

export const quizQuestions = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  question: `Q${i + 1}: Variation concept application question`,
  options: ['A','B','C','D'],
  answer: 'B'
}));

export const student = { name: 'Aina', xp: 1820, streak: 12, progress: 64, completionRate: 78 };
