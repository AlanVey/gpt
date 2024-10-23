const formatting = ". Your output should exctly follow the JSON format specified below. Insert the results to the areas marked XXX in the appropriate area based on the id. Make these answers inserted into each XXX not longer in characters than the value specified in maxCharacters for each id. format:";

const prompts = [
  "Create a title for the deck including the clients name" ++ formatting ++ '[{"id": "proposalTitle", "maxCharacters": 24, "value": "XXX"}]',
  "For the client break down the top 3 unique values the brand embodies" ++ formatting ++ '[{"id": "firstValueTitle", "maxCharacters": 30, "value": "XXX"}, {"id": "firstValueBody", "maxCharacters": 120, "value": "XXX"}, {"id": "secondValueTitle", "maxCharacters": 30, "value": "XXX"}, {"id": "secondValueBody", "maxCharacters": 120, "value": "XXX"}, {"id": "thirdValueTitle", "maxCharacters": 30, "value": "XXX"}, {"id": "thirdValueBody", "maxCharacters": 120, "value": "XXX"}]',
  "Come up with the 3 best possible bullet points for what the client should do with their Instagram strategy"  ++ formatting ++ '[{"id": "IGRecs". "maxCharacters": 60, "value": "XXX"}]',
  "Look up the clinets instgram followers and engagement rate"  ++ formatting ++ '[{"id": "IGFollowerCount", "maxCharacters": 5, "value": "XXX followers on Instagram"}, {"id": "IGEngagementRate", "maxCharacters": 5, "value": "Engagement rate: XXX%"}]', 
  "Come up with the 3 best possible bullet points for what the client should do with their X strategy" ++ formatting ++ '[{"id": "XRecs". "maxCharacters": 60, "value": "XXX"}]',
  "Look up the clinets X followers and engagement rate"  ++ formatting ++ '[{"id": "XFollowerCount", "maxCharacters": 5, "value": "XXX followers on X"}, {"id": "XEngagementRate", "maxCharacters": 5, "value": "Engagement rate: XXX%"}]', 
  "Come up with the 3 best possible bullet points for what the client should do with their TikTok strategy"  ++ formatting ++ '[{"id": "TikTokRecs". "maxCharacters": 60, "value": "XXX"}]',
  "Look up the clinets TikTok followers and engagement rate"  ++ formatting ++ '[{"id": "TikTokFollowerCount", "maxCharacters": 5, "value": "XXX followers on TikTok"}, {"id": "TikTokEngagementRate", "maxCharacters": 5, "value": "Engagement rate: XXX%"}]', 
  "Analuse the clients target audience and break down the top 3 key takeaways about the audience" ++ formatting ++ '[{"id": "firstAudienceTitle", "maxCharacters": 26, "value": "XXX"}, {"id": "firstAudienceBody", "maxCharacters": 250, "value": "XXX"}, {"id": "secondAudienceTitle", "maxCharacters": 26, "value": "XXX"}, {"id": "secondAudienceBody", "maxCharacters": 250, "value": "XXX"}, {"id": "thirdAudienceTitle", "maxCharacters": 26 "value": "XXX"}, {"id": "thirdAudienceBody", "maxCharacters": 250 "value": "XXX"}]',
  "Perform a competitor analysis and identify the top 3 competitors and their strengths and weaknesses" ++ formatting ++ '[{"id": "firstCompetitorName", "maxCharacters": 17, "value": "XXX"}, {"id": "compOneStrengths", "maxCharacters": 60, "value": "XXX"}, {"id": "compOneWeaknesses", "maxCharacters": 60, "value": "XXX"}, {"id": "secondCompetitorName", "maxCharacters": 17, "value": "XXX"}, {"id": "compTwoStrengths", "maxCharacters": 60, "value": "XXX"}, {"id": "compTwoWeaknesses", "maxCharacters": 60, "value": "XXX"}, {"id": "thirdCompetitorName", "maxCharacters": 17, "value": "XXX"}, {"id": "compThreeStrengths", "maxCharacters": 60, "value": "XXX"}, {"id": "compThreeWeaknesses", "maxCharacters": 60, "value": "XXX"}]',
  "Create the game plan you are proposing for the client for te various phases, the beginning, research, content, amplify, engage and montior / adjust." ++ formatting ++ '[{"id": "beginningBody", "maxCharacters": 120, "value": "XXX"}, {"id": "researchBody", "maxCharacters": 120, "value": "XXX"}, {"id": "contentBody", "maxCharacters": 120, "value": "XXX"}, {"id:", "amplifyBody", "maxCharacters": 120, "value": "XXX"}, {"id": "engageBody", "maxCharacters": 120, "value": "XXX"}, {"id": "monitorBody", "maxCharacters": 120, "value": "XXX"}]',
  "Create the 3 best marketing compaigns we think the client should do" ++ formatting ++ '[{"id": "firstCampaignDescription", "maxCharacters": 360, "value": "XXX"}, {"id": "firstCampaignGoal", "maxCharacters": 240, "value": "XXX"}, {"id": "firstCampaignOutcomes", "maxCharacters": 120, "value": "XXX"}, {"id": "secondCampaignDescription", "maxCharacters": 360, "value": "XXX"}, {"id": "secondCampaignGoal", "maxCharacters": 240, "value": "XXX"}, {"id", "secondCampaignOutcomes", "maxCharacters": 120, "value": "XXX"}, {"id": "thirdCampaignDescription", "maxCharacters": 360, "value": "XXX"}, {"id": "thirdCampaignGoal", "maxCharacters": 240, "value": "XXX"}, {"id": "thirdCampaignOutcomes", "maxCharacters": 120, "value": "XXX"}]',
  "Analyse the top 3 postive impacts the strategy we have proposed to the client will, try to be a quantitative a possible and reference others who have done similar successfully" ++ formatting '[{"id": "firstOutcomeTitle", "maxCharacters": 12, "value": "XXX"}, {"id": "firstOutcomeBody", "maxCharacters": 120, "value": "XXX"}, {"id": "secondOutcomeTitle", "maxCharacters": 12, "value": "XXX"}, {"id":"secondOutcomeBody", "maxCharacters": 120, "value": "XXX"}, {"id": "thirdOutcomeTitle", "maxCharacters": 12, "value": "XXX"}, {"id": "thirdOutcomeBody", "maxCharacters": 120, "value": "XXX"}]'
]

module.exports = { prompts }




      











      




  


  
