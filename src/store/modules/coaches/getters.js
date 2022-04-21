export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;

    // TODO: Instead of iterating through coaches, we could use state.userId 
    // on coaches store index
    return coaches.some((coach) => coach.id === userId);
  },
};
