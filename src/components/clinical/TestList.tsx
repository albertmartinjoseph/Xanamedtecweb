import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { ModalTriggerButton } from '@/components/ui/ModalTriggerButton';

export interface TestListItem {
  slug: string;
  name: string;
  sub?: string;
  desc: string;
  /** Short tag: turnaround or sample type */
  meta: string;
  price: string;
}

interface TestListProps {
  items: TestListItem[];
  detailsLabel?: string;
  /** Show the "Book Test" action on each card */
  book?: boolean;
  /** Clamp the description to two lines */
  clamp?: boolean;
}

/** Health tests as a grid of cards: name, what it is, price, two actions. */
export const TestList: React.FC<TestListProps> = ({
  items,
  detailsLabel = 'Test Details',
  book = true,
  clamp = false,
}) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((test) => (
      <li key={test.slug} className="card flex flex-col">
        <div className="meta flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {test.meta}
        </div>

        <h3 className="font-display h-md mt-4">
          <Link href={`/${test.slug}`} className="transition-colors hover:text-accent">
            {test.name}
          </Link>
        </h3>

        <p className={`mt-3 mb-8 text-[15px] text-soft ${clamp ? 'line-clamp-2' : ''}`}>{test.sub || test.desc}</p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-2xl font-medium">{test.price}</span>
          {book ? (
            <ModalTriggerButton variant="teal" size="sm" withArrow>
              Book
            </ModalTriggerButton>
          ) : (
            <Link href={`/${test.slug}`} className="btn btn-sm btn-ghost">
              <span>{detailsLabel}</span>
              <ArrowRight />
            </Link>
          )}
        </div>
      </li>
    ))}
  </ul>
);
