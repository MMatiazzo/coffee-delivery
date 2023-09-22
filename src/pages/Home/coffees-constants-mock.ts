import expresso from '../../assets/coffee-types/expresso.svg';
import americano from '../../assets/coffee-types/americano.svg';
import cremoso from '../../assets/coffee-types/expresso-cremoso.svg';
import gelado from '../../assets/coffee-types/cafe-gelado.svg';
import cafeComLeite from '../../assets/coffee-types/cafe-com-leite.svg';
import latte from '../../assets/coffee-types/latte.svg';
import capuccino from '../../assets/coffee-types/capuccino.svg';
import macchiato from '../../assets/coffee-types/macchiato.svg';
import mochaccino from '../../assets/coffee-types/mochaccino.svg';
import chocolateQuente from '../../assets/coffee-types/chocolate-quente.svg';
import cubano from '../../assets/coffee-types/cubano.svg';
import havaiano from '../../assets/coffee-types/havaiano.svg';
import arabe from '../../assets/coffee-types/arabe.svg';
import irlandes from '../../assets/coffee-types/irlandes.svg';

export interface ICoffeeProducts {
	id: number;
	tag: string[];
	name: string;
	description: string;
	price: number;
	img: string;
	amount: number;
}

export const coffees: ICoffeeProducts[] = [
	{
		id: 1,
		tag: ['tradicional'],
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.9,
		img: expresso,
		amount: 1,
	},
	{
		id: 2,
		tag: ['tradicional'],
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 9.9,
		img: americano,
		amount: 1,
	},
	{
		id: 3,
		tag: ['tradicional'],
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 9.9,
		img: cremoso,
		amount: 1,
	},
	{
		id: 4,
		tag: ['tradicional', 'gelado'],
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.9,
		img: gelado,
		amount: 1,
	},
	{
		id: 5,
		tag: ['tradicional', 'com leite'],
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 9.9,
		img: cafeComLeite,
		amount: 1,
	},
	{
		id: 6,
		tag: ['tradicional', 'com leite'],
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 9.9,
		img: latte,
		amount: 1,
	},
	{
		id: 7,
		tag: ['tradicional', 'com leite'],
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 9.9,
		img: capuccino,
		amount: 1,
	},
	{
		id: 8,
		tag: ['tradicional', 'com leite'],
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		price: 9.9,
		img: macchiato,
		amount: 1,
	},
	{
		id: 9,
		tag: ['tradicional', 'com leite'],
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 9.9,
		img: mochaccino,
		amount: 1,
	},
	{
		id: 10,
		tag: ['especial', 'com leite'],
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 9.9,
		img: chocolateQuente,
		amount: 1,
	},
	{
		id: 11,
		tag: ['especial', 'alcoólico', 'gelado'],
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 9.9,
		img: cubano,
		amount: 1,
	},
	{
		id: 12,
		tag: ['especial'],
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 9.9,
		img: havaiano,
		amount: 1,
	},
	{
		id: 13,
		tag: ['especial'],
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 9.9,
		img: arabe,
		amount: 1,
	},
	{
		id: 14,
		tag: ['especial'],
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 9.9,
		img: irlandes,
		amount: 1,
	},
];
