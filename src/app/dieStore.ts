import { generateRandomDiceUseCase } from '../di-container'

import { defineStore } from 'pinia';

export const useDieStore = defineStore('dice', () => {
  const dice = generateRandomDiceUseCase.execute();

  return {
    dice
  }
});