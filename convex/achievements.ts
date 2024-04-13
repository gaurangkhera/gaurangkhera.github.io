import { query } from "./_generated/server";

export const getAchievements = query({
    async handler(ctx) {
        const achievements = await ctx.db.query('achievements').collect();

        return achievements;
    },
})