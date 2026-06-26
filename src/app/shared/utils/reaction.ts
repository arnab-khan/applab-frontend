import { ReactionCount } from '../interfaces/reaction';
import { CHAT_REACTION_OPTIONS } from '../options/chat-reaction-options';

export function orderReactionCounts(reactions: ReactionCount[]) {
    return CHAT_REACTION_OPTIONS
        .map((reactionOption) => reactions.find((reaction) => reaction.emoji === reactionOption.code))
        .filter((reaction) => !!reaction);
}
