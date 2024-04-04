'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { IEvent } from '@/lib/database/models/event-model';
import { eventFormSchema } from '@/lib/validator';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {


      const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver:zodResolver(eventFormSchema),
        defaultValues:initialVa
      });
 
  return <div>EventForm</div>;
};

export default EventForm;