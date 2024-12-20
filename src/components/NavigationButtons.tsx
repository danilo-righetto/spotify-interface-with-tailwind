import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationButtons() {
    return (
        <div className="flex items-center gap-4">
            {/* Botoes de navegação */}
            <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
            </button>
        </div>
    )
}