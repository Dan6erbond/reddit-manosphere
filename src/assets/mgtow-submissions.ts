interface Category {
  name: string;
  submissions: Submission[];
}

interface Submission {
  url: string;
}

const categories: Category[] = [
  {
    name: "General Women Bad",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/jxil8t/bizarre_gatekeeping_mgtow_suspicious_of_whether/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/p1yyan/i_found_this_on_rmgtow_before_the_subreddit_was/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/otmyic/rmgtow_are_this_deluded/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/o79vaq/mgtow_goes_on_long_bragrant_about_refusing_to/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/oje3or/mgtow_were_not_incels_also_mgtow/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/onv7x2/mgtows_defending_generalizing_women/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/lerm0j/a_mgtow_suspects_that_his_wife_is_out_cheating/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mfsbcy/mgtows_writing_up_their_own_warning_labels_its_a/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mq7vy8/mgtow_comparing_women_to_rats_and_cockroaches/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/jed6zd/how_to_brainwash_a_14_year_old_into_paranoid/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/lxr4l6/between_referring_to_women_as_fish_owners/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/j09l9k/mgtows_believe_that_childbirth_is_no_big_deal_and/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/lerxu3/bad_mgtow_science_real_men_only_want_women_for/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/kq9f12/the_thumbnail_is_literally_saying_that_spending/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/kxlqv0/bad_history_mgtows_credit_men_with_teaching_women/",
      },
    ],
  },
  {
    name: "Kill Women / Abolish Women's Rights",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/l15812/as_usual_mgtows_invent_fictional_scenario_and/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/jsghb9/mgtow_were_not_a_hategroup_we_just_want_equal/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/oxoqj5/lovely_reaction_to_rmgtow_getting_banned/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mqkxbw/meanwhile_over_at_the_mgtow_dumpster_fire/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/kpqbxf/mgtow_is_totally_not_a_hategroup_s_apparently/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/lnm55s/mgtow_unironically_claiming_that_women_not_being/",
      },
    ],
  },
  {
    name: "Men are Oppressed / Men are Always Good",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/nerrpt/mgtow_once_again_clamoring_for_a_crumb_of/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/lnltff/mgtow_is_totally_not_a_hategroup_that_revolves/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mfs86f/mgtow_commenter_gets_20_downvotes_for_suggesting/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/k88ie4/man_heroically_saves_dog_as_per_usual_mgtow/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/nvhrkk/mgtow_were_not_a_hate_group_also_mgtow_if_your/",
      },
    ],
  },
  {
    name: "30+ y/os / Single Moms are Worthless",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/o7bj91/was_morbidly_curious_to_see_what_was_on_mgtow/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/o98aea/its_scary_how_927_liked_italso_this_guy_who/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mt8kri/mgtow_are_just_as_dangerous_as_incels_please_join/",
      },
    ],
  },
  {
    name: "Abuse isn't Real",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/kl4hrv/with_absolutely_no_details_or_evidence_mgtow_once/",
      },
    ],
  },
  {
    name: "Rape is OK",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mfvrwa/predators_of_mgtow_unsurprising_asserting_that_if/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/kxm6jn/dear_mgtow_no_women_are_not_offended_by_not/",
      },
    ],
  },
  {
    name: "Pedophilia / Beastiality",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/mjava3/rmgtow_the_sub_talking_about_abstaining_from/",
      },
      {
        url: "https://www.reddit.com/r/IncelTear/comments/o0qjew/mgtow_hot_take_women_are_virtually_children_and/",
      },
    ],
  },
  {
    name: "r/BadWomensAnatomy",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/l3ryq9/mgtow_is_upset_that_his_female_coworker_has/",
      },
    ],
  },
  {
    name: "Self-Hatred",
    submissions: [
      {
        url: "https://www.reddit.com/r/IncelTear/comments/jafjo3/perhaps_this_mgtow_will_wake_up_to_actual_reality/",
      },
    ],
  },
];

export { categories };
