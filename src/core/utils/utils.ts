import { VideogamesFilter } from "@/features/videogames/domain/entities/videogamesFilter";

//la api devuelve la fecha en formato string, esta funcion la convierte en objeto Date
export function getDateFromString(dateString: string): Date | null {
    if (isNaN(Date.parse(dateString))) return null;
    return new Date(dateString);
}

export function getArrayFromStringWithSeparator(string: string, separator: string): string[] {
    return string.split(separator).map((item) => item.trim());
}

export function getMetacriticColor(score: number): string {
    if (score < 70) return "bg-red-500 text-white";
    if (score < 85) return "bg-orange-500 text-white";
    return "bg-green-500 text-white";
}

export function getFormattedNumber(number:number):string{
    return number.toLocaleString("es-ES");
}