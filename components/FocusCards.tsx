import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsComp() {
    const cards = [
        {
            title: "Dr. Shekar Pratap",
            src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "John Kenley",
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Kareena Khan",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww",
        },
    ];

    return <FocusCards cards={cards} />;
}
