import {Liveblocks} from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: Request) {
    const {sessionClaims} = await auth();
    if(!sessionClaims){
        return new Response("Unauthorized", {status: 401})
    }

    const user = await currentUser();
    if(!user){
        return new Response("Unauthorized", {status: 401})
    }

    const {room} = await req.json();
    const document = await convex.query(api.documents.getById,({id: room}));

    if(!document){
        return new Response("Unauthorized", {status: 401});
    }
    interface ClerkSessionClaims {
        o?: {
            id: string;
            rol: string;
            slg: string;
        };
    }

    const orgId = (sessionClaims as ClerkSessionClaims).o?.id;
    const isOwner = document.ownerId === user.id;
    const isOrganizationMember = !!(document.organizationId && document.organizationId === orgId);
    
    //console.log({isOwner, isOrganizationMember, orgId, document});

    if(!isOwner && !isOrganizationMember){
        return new Response("Unauthorized", {status: 401});
    }
    
    const name = user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";
    const nameToNum = name.split("").reduce((acc,char) => acc + char.charCodeAt(0),0);
    const hue = Math.abs(nameToNum) % 360;
    const color = `hsl(${hue}, 80%, 60%)`;

    const session = liveblocks.prepareSession(user.id,{
        userInfo: {
            name: name,
            avatar: user.imageUrl,
            color,
        },
    });

    session.allow(room, session.FULL_ACCESS);
    const {body, status} = await session.authorize();

    return new Response(body, {status});
};