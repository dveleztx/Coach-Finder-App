import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      userIsCoach: false,
      coaches: [
        {
          id: 'c1',
          firstName: 'Rick',
          lastName: 'Strobel',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Rick Strobel and I've worked as a freelance web developer for years. Let's learn together!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Jacie',
          lastName: 'Adams',
          areas: ['frontend', 'career'],
          description:
            'I am Jacie and as a senior developer in a big tech company, I can help you developer your career!',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
