import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  achievements: defineTable({
    achievement: v.string(),
    date: v.string(),
  })
});